import type { ComponentType } from "react";
import type { ContentBlock } from "@/data/learn/types";
import { Paragraph } from "@/components/learn/blocks/Paragraph";
import { Callout } from "@/components/learn/blocks/Callout";
import { FlowDiagram } from "@/components/learn/blocks/FlowDiagram";
import { ListBlock } from "@/components/learn/blocks/ListBlock";
import { ComparisonTable } from "@/components/learn/blocks/ComparisonTable";
import { Scenario } from "@/components/learn/blocks/Scenario";
import { Takeaways } from "@/components/learn/blocks/Takeaways";
import { Quiz } from "@/components/learn/blocks/Quiz";
import { widgetRegistry } from "@/components/learn/widgets/WidgetRegistry";

function assertNever(value: never): never {
  throw new Error(`Unhandled content block type: ${JSON.stringify(value)}`);
}

function renderBlock(block: ContentBlock, key: string) {
  switch (block.type) {
    case "heading": {
      const Tag = block.level === 3 ? "h4" : "h3";
      return (
        <Tag key={key} className="text-base font-semibold text-foreground">
          {block.text}
        </Tag>
      );
    }
    case "paragraph":
      return <Paragraph key={key} text={block.text} lead={block.lead} />;
    case "callout":
      return <Callout key={key} tone={block.tone} title={block.title} text={block.text} />;
    case "flow-diagram":
      return (
        <FlowDiagram
          key={key}
          title={block.title}
          orientation={block.orientation}
          steps={block.steps}
          showZoneLegend={block.showZoneLegend}
        />
      );
    case "list":
      return <ListBlock key={key} style={block.style} title={block.title} items={block.items} />;
    case "comparison":
      return (
        <ComparisonTable
          key={key}
          title={block.title}
          subjects={block.subjects}
          rows={block.rows}
        />
      );
    case "scenario":
      return (
        <Scenario
          key={key}
          title={block.title}
          setup={block.setup}
          walkthrough={block.walkthrough}
          lesson={block.lesson}
        />
      );
    case "takeaways":
      return <Takeaways key={key} items={block.items} />;
    case "quiz":
      return <Quiz key={key} questions={block.questions} />;
    case "widget": {
      const Widget = widgetRegistry[block.widget] as ComponentType<Record<string, unknown>>;
      return (
        <div key={key}>
          {(block.title || block.description) && (
            <div className="mb-3">
              {block.title && (
                <p className="text-sm font-semibold text-foreground">{block.title}</p>
              )}
              {block.description && (
                <p className="mt-0.5 text-xs leading-5 text-muted">{block.description}</p>
              )}
            </div>
          )}
          <Widget {...(block.config as Record<string, unknown>)} />
        </div>
      );
    }
    default:
      return assertNever(block);
  }
}

type ContentBlockRendererProps = {
  blocks: ContentBlock[];
};

export function ContentBlockRenderer({ blocks }: ContentBlockRendererProps) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => renderBlock(block, `${block.type}-${index}`))}
    </div>
  );
}
