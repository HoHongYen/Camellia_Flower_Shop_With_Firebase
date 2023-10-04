# XÂY DỰNG WEBSITE BÁN HOA :cherry_blossom:

Tên website: CAMELLIA 

Bài tập lớn cuối kì môn phát triển ứng dụng web (CT449).
Sử dụng framework VueJS và nền tảng Firebase để hỗ trợ authentication, lưu trữ và kết nối realtime tới database, và cả hosting.

## :sunflower: Cài đặt

```bash
# install dependencies
npm install

# Client app and Admin app
npm run dev
```
## :sunflower: Các collections trong CSDL
- products
- users
- carts
- orders

## :sunflower: Một số chức năng chính
### :cherries: Trang web cho client
- Chức năng đăng kí.
- Chức năng đăng nhập (xác thực bằng JWT).
- Chức năng xem và cập nhật thông tin cá nhân của mình.
- Chức năng đăng xuất.
- Trang chủ hiển thị thông tin về các bộ sưu tập mới và các dịp khuyến mãi.
- Trang blog hiển thị một số bài viết cung cấp kiến thức về đặc tính cũng như cách chăm 
sóc hoa.
- Trang sản phẩm hiển thị danh sách các sản phẩm để khách hàng có thể xem và chọn lựa.
- Có thể lọc sản phẩm theo các dịp tặng hoặc theo giá.
- Có thể tìm kiếm sản phẩm theo từ khóa trên thanh tìm kiếm.
- Trang giỏ hàng hiển thị danh sách các sản phẩm được thêm vào giỏ hàng.
- Có thể chỉnh sửa số lượng sản phẩm hoặc xóa sản phẩm trong giỏ hàng.
- Thanh toán giỏ hàng, chuyển tới trang thanh toán.
- Khách hàng điền thông tin giao hàng và xác nhận đơn hàng.
- Có thể chỉnh sửa hoặc hủy đơn hàng nếu như đơn hàng vẫn còn trong trạng thái chưa 
được duyệt.
- Hiển thị thông báo số lượng đơn hàng đang được xử lí và đã hoàn thành.
- Khách hàng có thể xem lịch sử mua hàng của mình.
### :cherries: Trang quản trị cho admin
- Chức năng đăng nhập (xác thực bằng JWT).
- Chức năng xem và cập nhật thông tin cá nhân của mình.
- Chức năng đăng xuất.
- Cho phép cập nhật khách hàng, sản phẩm, đơn hàng vào cơ sở dữ liệu.
- Quản lí khách hàng (xem, xóa).
- Quản lí sản phẩm (xem, thêm, sửa, xóa).
- Quản lí đơn hàng (xem, xử lí).
- Quản lí bài viết (xem, thêm, sửa, xóa).
- Hiển thị thông báo số lượng đơn hàng mới cần xử lí
