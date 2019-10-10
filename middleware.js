import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube"; //'locals' makes variables be used globally
  res.locals.routes = routes;
  next(); //because Middeware is between connections and routes
};
