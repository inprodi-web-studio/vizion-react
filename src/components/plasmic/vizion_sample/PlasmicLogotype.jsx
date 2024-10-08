// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rhtpiygehaYPHyZZdWmjau
// Component: qqkvSQ_XaOae
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: rhtpiygehaYPHyZZdWmjau/projectcss
import sty from "./PlasmicLogotype.module.css"; // plasmic-import: qqkvSQ_XaOae/css
import darkVizionpngXmkp4QnnlR1O from "./images/darkVizionpng.png"; // plasmic-import: xmkp4qnnlR1o/picture

createPlasmicElementProxy;

export const PlasmicLogotype__VariantProps = new Array();

export const PlasmicLogotype__ArgProps = new Array();

const $$ = {};

function PlasmicLogotype__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"container"}
      data-plasmic-override={overrides.container}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.container
      )}
    >
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"40px"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"40px"}
        loading={"lazy"}
        src={{
          src: darkVizionpngXmkp4QnnlR1O,
          fullWidth: 900,
          fullHeight: 756,
          aspectRatio: undefined
        }}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Vizion"}
      </div>
    </Stack__>
  );
}

const PlasmicDescendants = {
  container: ["container", "img", "text"],
  img: ["img"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogotype__ArgProps,
          internalVariantPropNames: PlasmicLogotype__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogotype__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "container") {
    func.displayName = "PlasmicLogotype";
  } else {
    func.displayName = `PlasmicLogotype.${nodeName}`;
  }
  return func;
}

export const PlasmicLogotype = Object.assign(
  // Top-level PlasmicLogotype renders the root element
  makeNodeComponent("container"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicLogotype
    internalVariantProps: PlasmicLogotype__VariantProps,
    internalArgProps: PlasmicLogotype__ArgProps
  }
);

export default PlasmicLogotype;
/* prettier-ignore-end */
