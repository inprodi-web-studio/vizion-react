// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rhtpiygehaYPHyZZdWmjau
// Component: R-HR0MebKBYO
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Skeleton } from "inprodi-design-system"; // plasmic-import: BVuwjAViiz5F/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: rhtpiygehaYPHyZZdWmjau/projectcss
import sty from "./PlasmicHeaderCounter.module.css"; // plasmic-import: R-HR0MebKBYO/css

createPlasmicElementProxy;

export const PlasmicHeaderCounter__VariantProps = new Array();

export const PlasmicHeaderCounter__ArgProps = new Array("value", "loading");

const $$ = {};

function PlasmicHeaderCounter__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          value: 0,
          loading: false
        },
        props.args
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <div
      data-plasmic-name={"mainContainer"}
      data-plasmic-override={overrides.mainContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.mainContainer
      )}
    >
      {(() => {
        try {
          return (() => {
            return !$props.loading;
          })();
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <div
          data-plasmic-name={"counter"}
          data-plasmic-override={overrides.counter}
          className={classNames(projectcss.all, sty.counter)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return (() => {
                    return $props.value;
                  })();
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "1";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </div>
      ) : null}
      {(() => {
        try {
          return (() => {
            return $props.loading;
          })();
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <Skeleton
          data-plasmic-name={"skeleton"}
          data-plasmic-override={overrides.skeleton}
          circle={false}
          className={classNames("__wab_instance", sty.skeleton)}
          count={1}
        />
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  mainContainer: ["mainContainer", "counter", "text", "skeleton"],
  counter: ["counter", "text"],
  text: ["text"],
  skeleton: ["skeleton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeaderCounter__ArgProps,
          internalVariantPropNames: PlasmicHeaderCounter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeaderCounter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "mainContainer") {
    func.displayName = "PlasmicHeaderCounter";
  } else {
    func.displayName = `PlasmicHeaderCounter.${nodeName}`;
  }
  return func;
}

export const PlasmicHeaderCounter = Object.assign(
  // Top-level PlasmicHeaderCounter renders the root element
  makeNodeComponent("mainContainer"),
  {
    // Helper components rendering sub-elements
    counter: makeNodeComponent("counter"),
    text: makeNodeComponent("text"),
    skeleton: makeNodeComponent("skeleton"),
    // Metadata about props expected for PlasmicHeaderCounter
    internalVariantProps: PlasmicHeaderCounter__VariantProps,
    internalArgProps: PlasmicHeaderCounter__ArgProps
  }
);

export default PlasmicHeaderCounter;
/* prettier-ignore-end */
