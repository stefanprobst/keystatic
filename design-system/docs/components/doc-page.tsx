import { Tag } from '@markdoc/markdoc';
import { Flex } from '@voussoir/layout';
import { Heading, Text } from '@voussoir/typography';
import { generateToc } from '../utils/generate-toc';
import { DocsContent } from './content';
import { DocContent } from './mdx-components/mdx-content';

export type DocPageProps = {
  content: Tag;
  description: string | null;
  title: string;
};

export function DocPage({
  content,
  description,
  title,
}: DocPageProps): JSX.Element {
  return (
    <DocsContent toc={generateToc(content)}>
      <Flex gap="xxlarge" direction="column">
        <Heading size="large" elementType="h1">
          {title}
        </Heading>
        <Text size="large" elementType="p" color="neutralSecondary">
          {description}
        </Text>
      </Flex>
      <DocContent content={content} />
    </DocsContent>
  );
}
