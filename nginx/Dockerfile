FROM nginx:stable-alpine

  WORKDIR /usr/share/nginx/html

  RUN rm -rf *

  COPY nginx.conf /etc/nginx/conf.d/default.conf

  EXPOSE 80

  ENTRYPOINT ["nginx", "-g", "daemon off;"]
