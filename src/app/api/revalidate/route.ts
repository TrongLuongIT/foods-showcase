import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  // Lấy các tham số từ URL: ?tag=xxx&secret=yyy
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag');
  const secret = searchParams.get('secret');

  // Kiểm tra mã bảo mật (Phải khớp với mã bạn đặt ở .env)
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Sai mã bí mật!' }, { status: 401 });
  }

  if (!tag) {
    return NextResponse.json({ message: 'Thiếu tham số tag' }, { status: 400 });
  }

  // Lệnh quan trọng nhất: Xóa cache của những hàm có gắn Tag này
  revalidateTag(tag);

  return NextResponse.json({ 
    revalidated: true, 
    message: `Đã xóa cache cho nhóm: ${tag}` 
  });
}