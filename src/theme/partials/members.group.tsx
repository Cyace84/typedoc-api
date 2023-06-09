import { JSX, ReflectionGroup } from "typedoc";
import { MyThemeRenderContext } from "../myThemeRenderContext";
import { classNames } from "../../utils";
import { anchorIcon } from "../partials/shared/anchorIcon";

export function membersGroup(
  context: MyThemeRenderContext,
  group: ReflectionGroup,
) {
  if (group.categories) {
    return (
      <>
        {group.categories.map(item => (
          <section class="tsd-panel-group tsd-member-group">
            <h2>
              {group.title}
              {!!item.title && <> - {item.title}</>}
            </h2>
            {item.children.map(
              item => !item.hasOwnDocument && context.member(item),
            )}
          </section>
        ))}
      </>
    );
  }

  return (
    <section class="tsd-panel-group tsd-member-group">
      <h4
        id={group.title?.toLowerCase()}
        class={classNames({
          "tsd-anchor-link": true,
          "tsd-group-title": true,
        })}
      >
        {group.title}

        {anchorIcon(context, group.title?.toLowerCase())}
      </h4>
      {group.children.map(item => !item.hasOwnDocument && context.member(item))}
    </section>
  );
}
