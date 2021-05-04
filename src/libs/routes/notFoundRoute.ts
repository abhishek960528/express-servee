const PageNotFound = (res: any, next: any) => {
  res.status(404).json({
    error: "Error Page not found",
  });
  next();
};

export default PageNotFound;
