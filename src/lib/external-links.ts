import { defineHastPlugin } from 'satteri';

/**
 * Open external Markdown links (absolute http/https URLs) in a new tab with a
 * safe rel attribute. Relative, hash and mailto links are left alone.
 */
export const externalLinks = defineHastPlugin({
  name: 'external-links',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties.href;
      if (typeof href !== 'string' || !/^https?:\/\//i.test(href)) return;
      ctx.setProperty(node, 'target', '_blank');
      ctx.setProperty(node, 'rel', 'noopener noreferrer');
    },
  },
});
