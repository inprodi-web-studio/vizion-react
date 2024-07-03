// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rhtpiygehaYPHyZZdWmjau
// Component: vGT8E4MFM0KX
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { Tag } from "inprodi-design-system"; // plasmic-import: _BCMntBFn9Hi/codeComponent
import { Icon } from "inprodi-design-system"; // plasmic-import: pr11DOeHp2wt/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: rhtpiygehaYPHyZZdWmjau/projectcss
import sty from "./PlasmicTagsWrapper.module.css"; // plasmic-import: vGT8E4MFM0KX/css

createPlasmicElementProxy;

export const PlasmicTagsWrapper__VariantProps = new Array();

export const PlasmicTagsWrapper__ArgProps = new Array("value", "onValueChange");

const $$ = {};

function PlasmicTagsWrapper__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "value",
        type: "writable",
        variableType: "array",
        valueProp: "value",
        onChangeProp: "onValueChange"
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root
      )}
    >
      {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
        (() => {
          try {
            return (() => {
              return $state.value;
            })();
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return [];
            }
            throw e;
          }
        })()
      ).map((__plasmic_item_0, __plasmic_idx_0) => {
        const tag = __plasmic_item_0;
        const tagIndex = __plasmic_idx_0;
        return (
          <Tag
            data-plasmic-name={"tag"}
            data-plasmic-override={overrides.tag}
            bordered={true}
            className={classNames("__wab_instance", sty.tag)}
            closable={false}
            color={"#BFBFBF"}
            icon={
              <Icon
                data-plasmic-name={"icon"}
                data-plasmic-override={overrides.icon}
                className={classNames("__wab_instance", sty.icon)}
                icon={"Tag"}
                size={16}
                variant={"bold"}
              />
            }
            key={tagIndex}
            label={(() => {
              try {
                return tag.name;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
          />
        );
      })}
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "tag", "icon"],
  tag: ["tag", "icon"],
  icon: ["icon"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTagsWrapper__ArgProps,
          internalVariantPropNames: PlasmicTagsWrapper__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTagsWrapper__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTagsWrapper";
  } else {
    func.displayName = `PlasmicTagsWrapper.${nodeName}`;
  }
  return func;
}

export const PlasmicTagsWrapper = Object.assign(
  // Top-level PlasmicTagsWrapper renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tag: makeNodeComponent("tag"),
    icon: makeNodeComponent("icon"),
    // Metadata about props expected for PlasmicTagsWrapper
    internalVariantProps: PlasmicTagsWrapper__VariantProps,
    internalArgProps: PlasmicTagsWrapper__ArgProps
  }
);

export default PlasmicTagsWrapper;
/* prettier-ignore-end */
