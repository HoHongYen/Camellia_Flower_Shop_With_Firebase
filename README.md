# XÂY DỰNG WEBSITE BÁN HOA :cherry_blossom:

Tên website: CAMELLIA 

Bài tập lớn cuối kì môn phát triển ứng dụng web (CT449).

Sử dụng framework VueJS và nền tảng Firebase để hỗ trợ authentication, lưu trữ và kết nối realtime tới database, và cả hosting.

## :sunflower: Link website
### :cherries: Trang web cho admin
- https://camelliaflower-admin.web.app
- Email: admin@gmail.com
- Mật khẩu: admin181103
### :cherries: Trang web cho client
- https://camelliaflower.web.app

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
- Chức năng đăng nhập (có thể đăng nhập bằng google).
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

## :sunflower: Screenshots
### :cherries: Trang web cho client
- Trang đăng kí
![1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/e6c23a27-44b5-4686-b88d-6ae68d793953)

- Trang đăng nhập
![1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/7adfb9de-4fb9-42c2-8ad6-ac40652e9edf)

- Hoặc đăng nhập bằng google
![3](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/3f87bb0c-ad10-4697-9115-6c0f0551e788)

- Xem thông tin cá nhân
![4](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/f4872a2c-eb3b-478d-9a50-4728e0077600)

- Trang chủ
![5](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/a45b7eb4-2bb6-4ecc-a654-0ead441730ee)

- Trang sản phẩm
  ![6](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/8ca4e78f-d62e-4e34-89f5-2bb2eedd35ee)

- Tìm kiếm sản phẩm theo từ khóa
  ![7](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/b24da597-346a-40f6-a445-ffbc352584f6)

- Chi tiết sản phẩm
  ![8 1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/ca0b3343-6072-43c5-8385-ce3569ea44de)
  ![8 2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/ff049c60-5987-4fc9-b8e3-b9c44224e880)

- Giỏ hàng
  ![9](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/a4d9fc8f-04d5-422a-b8d5-38b7fe43a898)

- Đặt hàng
  ![10 1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/2b840d2c-d4f4-4221-8dec-3b9f3dad653d)
  ![10 2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/6b025ef4-96cf-46fb-adeb-c35d875b3042)

- Xem lịch sử mua hàng
  ![11](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/c555e864-a2c1-4441-9630-1987e6398cf1)

- Trang blog
  ![12](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/ba1ff785-b0f6-4b3a-a307-5c06ddd63706)

- Thông báo
  ![13](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/688cc1c1-1649-4c7c-9be3-1ac014e72e94)

### :cherries: Trang quản trị cho admin
- Trang đăng nhập
![1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/a6302944-c6c2-4ae3-9f63-b29ff5bcbf9d)

- Xem thông tin cá nhân
  ![2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/d1d81075-ae1d-4e04-98dd-63e5104465d4)

- Trang quản lí sản phẩm
  ![3](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/067e96bc-f7b0-426d-8481-aa34e0615b06)

- Chi tiết sản phẩm
  ![4](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/4e6176fe-de11-4745-af01-84483218a7e3)

- Thêm sản phẩm
  ![5 1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/fb6e6f5e-9aff-44a9-bf20-842de9a3dd32)
  ![5 2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/0255e0ac-91f4-4fd5-9392-368d8f43aa04)

- Trang quản lí khách hàng
  ![6](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/6d8e53c4-f699-4a42-a1ce-6c253b380311)

- Chi tiết khách hàng
  ![7](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/3cbc2154-eefb-45b0-a537-64d6f88fc363)

- Trang quản lí đơn hàng
  ![8](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/76c990ef-847e-4e9f-8ec6-10a70cf77cba)

- Chi tiết đơn hàng
  ![9 1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/d804c026-3ece-4d6d-99f1-6f79769df2c0)
  ![9 2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/d1cbc135-8a9a-4f71-9c21-c38a223ad9d8)

- Thông báo
  ![10](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/cf1b691c-9d59-4a1d-bc29-757f3e2dc9e6)
