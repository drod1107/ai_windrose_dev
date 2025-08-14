import withMDX from "@next/mdx";

const withMdx = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  compiler: {
    emotion: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMdx(nextConfig);
