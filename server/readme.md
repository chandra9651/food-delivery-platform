https://www.youtube.com/watch?v=ZiQPyD82ojk&t=267s




server/
│
├── src/
│
│   ├── config/
│   │   └── db.js
│
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── restaurantController.js
│   │   ├── foodController.js
│   │   ├── orderController.js
│   │   ├── paymentController.js
│   │   └── adminController.js
│
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── adminMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── uploadMiddleware.js
│
│   ├── models/
│   │   ├── User.js
│   │   ├── Restaurant.js
│   │   ├── Food.js
│   │   ├── Order.js
│   │   ├── Coupon.js
│   │   └── Review.js
│
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── restaurantRoutes.js
│   │   ├── foodRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── paymentRoutes.js
│   │   └── adminRoutes.js
│
│   ├── services/
│   │   ├── paymentService.js
│   │   ├── couponService.js
│   │   └── analyticsService.js
│
│   ├── utils/
│   │   ├── generateToken.js
│   │   ├── sendResponse.js
│   │   └── cloudinary.js
│
│   ├── app.js
│   └── server.js