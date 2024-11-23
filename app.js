import express from "express";
import rootRouter from "./routes/root.js";

const app = express();
const port = 3000;

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware xử lý dữ liệu POST
app.use(express.urlencoded({ extended: true }));

// Đăng ký router
app.use("/", rootRouter);

// Khởi chạy server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
