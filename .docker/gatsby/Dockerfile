FROM node:15.2.1-slim
RUN apt-get update \
    && apt-get install -y \
    git \
    ssh \
    vim \
    && npm install -g gatsby-cli
WORKDIR /arsaga-hackathon-website
ENV LANG=C.UTF-8 TZ=Asia/Tokyo
CMD ["/bin/bash"]