// ❌ 故意在 Edge 路由里使用 Node-only API
export const runtime = 'edge'; // 声明 Edge 运行时
import fs from 'fs';

export async function GET() {
  const content = fs.readFileSync('package.json', 'utf-8');
  return new Response(content, { status: 200 });
}
