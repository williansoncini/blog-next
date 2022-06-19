import remarkHtml from '../../node_modules/remark-html/index';
import { remark } from '../../node_modules/remark/index';

export async function markDownToHtml(content: string): Promise<string> {
  const htmlString = await remark().use(remarkHtml).process(content);
  return String(htmlString.value);
}
