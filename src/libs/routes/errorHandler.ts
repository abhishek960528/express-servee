const errorHandler = (res: any, next: any) => {
  res.status(500).json({
    error: "Not Found",
    message: "error",
    status: 500,
    timestamp: Date.now(),
  }),
    next();
};

export default errorHandler;
