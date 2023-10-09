# XÂY DỰNG WEBSITE BÁN HOA :cherry_blossom:

Tên website: CAMELLIA 

Bài tập lớn cuối kì môn phát triển ứng dụng web (CT449).

Sử dụng framework VueJS và nền tảng Firebase để hỗ trợ authentication, lưu trữ và kết nối realtime tới database, và cả hosting.

## :sunflower: Link website
### :cherries: Trang web cho client
- https://camelliaflower.web.app
### :cherries: Trang web cho admin
- https://camelliaflower-admin.web.app
- Email: admin@gmail.com
- Mật khẩu: admin181103

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
![1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/b14201a3-e040-4952-871d-e2a7791d47d2)

- Trang đăng nhập
![2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/605f9035-cff2-46bf-a30f-ebc45363231e)

- Hoặc đăng nhập bằng google
![3](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/b9363201-a299-4eda-87a2-69916bd711c8)

- Xem thông tin cá nhân
![4](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/f450a922-71d5-41ae-ae70-7604b1d5e27b)

- Trang chủ
![5](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/9fd832e2-09d4-4abb-8ad2-9d6e7877ca17)

- Trang sản phẩm
![6](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/83b56e9a-9ecd-45dc-9af0-885dc9e1e1d3)

- Tìm kiếm sản phẩm theo từ khóa
![7](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/64e32b9f-3b2b-4e14-b0c9-3c2403438839)

- Chi tiết sản phẩm
 ![8 1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/db80f8d7-761b-4edc-a780-099aced885ae)
![8 2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/a1d316d5-21e4-435f-8760-617621e474ae)

- Giỏ hàng
![9](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/05d88ecf-9269-4078-bd3f-a38cac8dc143)

- Đặt hàng
  ![10 1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/8d6cdc78-90c0-4e5c-a6c1-129f533e91ad)
![10 2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/8ca3d298-4d9a-4e35-806b-b39e1a7369c4)

- Xem lịch sử mua hàng
 ![11](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/3c549fc1-f6ea-4278-a555-8879baa30f96)

- Trang blog
 ![12](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/e4e0b20e-8c22-4103-9383-c26b214e8a74)

- Thông báo
 ![13](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/b14ec50a-5cf1-4ad6-85e2-ff13f4b0534a)


### :cherries: Trang quản trị cho admin
- Trang đăng nhập
![1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/f2c35097-9bda-40f5-a64c-f6f2ef1b4297)

- Xem thông tin cá nhân
![2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/15485ef1-3342-4343-a70b-e43f2c00540f)

- Trang quản lí sản phẩm
 ![3](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/22b2660d-afb8-408a-a480-0ac1d24dfa76)

- Chi tiết sản phẩm
![4](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/ce740070-733f-4fe2-8596-c13f46c06202)

- Thêm sản phẩm
  ![5 1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/acfae3db-194e-4a33-9d68-82e935c3b33a)
![5 2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/6c98bc13-42cc-4942-97f0-e187dff1978b)

- Trang quản lí khách hàng
![6](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/7b62e7a8-1ba0-4cf0-9702-7b5fcda428fc)

- Chi tiết khách hàng
 ![7](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/0834655c-0a54-4298-9cf1-773b4b8986d6)

- Trang quản lí đơn hàng
![8](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/41ccee0e-8438-4632-b9de-8aed76f32fb8)

- Chi tiết đơn hàng
  ![9 1](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/0df054e3-4c1b-41d8-892e-0e7aa743c650)
![9 2](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/9232e14f-0601-4edd-b014-1da4470369b1)

- Thông báo
  ![10](https://github.com/Hong-Yen/Camellia_Flower_Shop_With_Firebase/assets/94109674/dea3abb2-b1a7-4aa5-b405-2895169dfdd1)
