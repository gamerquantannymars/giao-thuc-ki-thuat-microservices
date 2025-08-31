FROM node:14

# Đặt thư mục làm việc cho ứng dụng
WORKDIR /usr/src/app

# Sao chép tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các package cần thiết
RUN npm install

# Sao chép tất cả các tệp còn lại vào thư mục làm việc
COPY . .

# Mở cổng 3000 để ứng dụng có thể truy cập từ bên ngoài
EXPOSE 3000
# Chạy lệnh npm start để khởi động ứng dụng
CMD [ "npm", "start" ]