FROM docker.v2.aispeech.com/aispeech/node:8.1.2
MAINTAINER ziqing.zhu@aispeech.com
STOPSIGNAL SIGQUIT
# lib
ADD server /opt/HELPDOC/server
ADD package.json /opt/HELPDOC/package.json
ADD run.sh /opt/HELPDOC/run.sh
RUN echo "Asia/Shanghai" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata
EXPOSE 3002
WORKDIR /opt/HELPDOC
CMD ["bash","/opt/HELPDOC/run.sh"]