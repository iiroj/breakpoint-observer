import { configure } from "@storybook/react";

import "@storybook/addon-console";

const requireAll = requireContext => requireContext.keys().map(requireContext);
const loadStories = () =>
  requireAll(require.context("../stories", true, /\.tsx?$/));

configure(loadStories, module);
