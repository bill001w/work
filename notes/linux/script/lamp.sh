yum install -y apr* autoconf automake bison bzip2 bzip2* compat* cpp \
curl curl-devel fontconfig fontconfig-devel freetype freetype* \
freetype-devel gcc gcc-c++ gd gettext gettext-devel glibc kernel kernel-headers keyutils \
keyutils-libs-devel krb5-devel libcom_err-devel libpng libpng-devel libjpeg* libsepol-devel \
libselinux-devel libstdc++-devel libtool* libgomp libxml2 libxml2-devel libXpm* libtiff libtiff* \
make mpfr ncurses* ntp openssl openssl-devel patch pcre-devel perl php-common \
php-gd policycoreutils telnet t1lib t1lib* nasm nasm* wget zlib-devel

wget http://www.linuxprobe.com/Software/cmake-2.8.11.2.tar.gz
wget http://www.linuxprobe.com/Software/Discuz_X3.2_SC_GBK.zip
wget http://www.linuxprobe.com/Software/freetype-2.5.3.tar.gz
wget http://www.linuxprobe.com/Software/jpegsrc.v9a.tar.gz
wget http://www.linuxprobe.com/Software/libgd-2.1.0.tar.gz
wget http://www.linuxprobe.com/Software/libmcrypt-2.5.8.tar.gz
wget http://www.linuxprobe.com/Software/libpng-1.6.12.tar.gz
wget http://www.linuxprobe.com/Software/libvpx-v1.3.0.tar.bz2
wget http://www.linuxprobe.com/Software/mysql-5.6.19.tar.gz
wget http://www.linuxprobe.com/Software/nginx-1.6.0.tar.gz
wget http://www.linuxprobe.com/Software/openssl-1.0.1h.tar.gz
wget http://www.linuxprobe.com/Software/php-5.5.14.tar.gz
wget http://www.linuxprobe.com/Software/pcre-8.35.tar.gz
wget http://www.linuxprobe.com/Software/t1lib-5.1.2.tar.gz
wget http://www.linuxprobe.com/Software/tiff-4.0.3.tar.gz
wget http://www.linuxprobe.com/Software/yasm-1.2.0.tar.gz
wget http://www.linuxprobe.com/Software/zlib-1.2.8.tar.gz

tar xzvf cmake-2.8.11.2.tar.gz
cd cmake-2.8.11.2/
./configure
make
make install

cd ..
useradd mysql -s /sbin/nologin
mkdir -p /usr/local/mysql/var
chown -Rf mysql:mysql /usr/local/mysql
tar xzvf mysql-5.6.19.tar.gz
cd mysql-5.6.19/
cmake . -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/var -DSYSCONFDIR=/etc
make
make install

rm -rf /etc/my.cnf
cd /usr/local/mysql
./scripts/mysql_install_db --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/var

ln -s my.cnf /etc/my.cnf
cp ./support-files/mysql.server /etc/rc.d/init.d/mysqld
chmod 755 /etc/rc.d/init.d/mysqld


#####################################


mkdir /var/lib/mysql
ln -s /usr/local/mysql/lib/mysql /usr/lib/mysql
ln -s /tmp/mysql.sock /var/lib/mysql/mysql.sock
ln -s /usr/local/mysql/include/mysql /usr/include/mysql



#####################################


cd /usr/local/src
tar xzvf pcre-8.35.tar.gz 
cd pcre-8.35
./configure --prefix=/usr/local/pcre
make
make install 

cd /usr/local/src
tar xzvf openssl-1.0.1h.tar.gz
cd openssl-1.0.1h
./config --prefix=/usr/local/openssl
make
make install 



#####################################

cd /usr/local/src
tar xzvf zlib-1.2.8.tar.gz 
cd zlib-1.2.8
./configure --prefix=/usr/local/zlib
make
make install


cd ..
useradd www -s /sbin/nologin
tar xzvf nginx-1.6.0.tar.gz 
cd nginx-1.6.0/
./configure --prefix=/usr/local/nginx --without-http_memcached_module --user=www --group=www --with-http_stub_status_module --with-http_ssl_module --with-http_gzip_static_module --with-openssl=/usr/local/src/openssl-1.0.1h --with-zlib=/usr/local/src/zlib-1.2.8 --with-pcre=/usr/local/src/pcre-8.35
make
make install



#####################################


tar zxvf yasm-1.2.0.tar.gz
cd yasm-1.2.0
./configure
make
make install
cd ..
tar zxvf libmcrypt-2.5.8.tar.gz
cd libmcrypt-2.5.8
./configure
make
make install
cd ..
tar xjvf libvpx-v1.3.0.tar.bz2
cd libvpx-v1.3.0
./configure --prefix=/usr/local/libvpx --enable-shared --enable-vp9
make
make install
cd ..
tar zxvf tiff-4.0.3.tar.gz
cd tiff-4.0.3
./configure --prefix=/usr/local/tiff --enable-shared
make
make install
cd ..
tar zxvf libpng-1.6.12.tar.gz
cd libpng-1.6.12
./configure --prefix=/usr/local/libpng --enable-shared
make
make install
cd ..
tar zxvf freetype-2.5.3.tar.gz
cd freetype-2.5.3
./configure --prefix=/usr/local/freetype --enable-shared
make
make install
cd ..
tar zxvf jpegsrc.v9a.tar.gz
cd jpeg-9a
./configure --prefix=/usr/local/jpeg --enable-shared
make
make install
cd ..
tar zxvf libgd-2.1.0.tar.gz
cd libgd-2.1.0
./configure --prefix=/usr/local/libgd --enable-shared --with-jpeg=/usr/local/jpeg --with-png=/usr/local/libpng --with-freetype=/usr/local/freetype --with-fontconfig=/usr/local/freetype --with-xpm=/usr/ --with-tiff=/usr/local/tiff --with-vpx=/usr/local/libvpx
make
make install
cd ..
tar zxvf t1lib-5.1.2.tar.gz
cd t1lib-5.1.2
./configure --prefix=/usr/local/t1lib --enable-shared
make
make install
ln -s /usr/lib64/libltdl.so /usr/lib/libltdl.so 
cp -frp /usr/lib64/libXpm.so* /usr/lib/
cd ..
tar -zvxf php-5.5.14.tar.gz
cd php-5.5.14
export LD_LIBRARY_PATH=/usr/local/libgd/lib
./configure --prefix=/usr/local/php --with-config-file-path=/usr/local/php/etc --with-mysql=/usr/local/mysql --with-mysqli=/usr/local/mysql/bin/mysql_config --with-mysql-sock=/tmp/mysql.sock --with-pdo-mysql=/usr/local/mysql --with-gd --with-png-dir=/usr/local/libpng --with-jpeg-dir=/usr/local/jpeg --with-freetype-dir=/usr/local/freetype --with-xpm-dir=/usr/ --with-vpx-dir=/usr/local/libvpx/ --with-zlib-dir=/usr/local/zlib --with-t1lib=/usr/local/t1lib --with-iconv --enable-libxml --enable-xml --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --enable-opcache --enable-mbregex --enable-fpm --enable-mbstring --enable-ftp --enable-gd-native-ttf --with-openssl --enable-pcntl --enable-sockets --with-xmlrpc --enable-zip --enable-soap --without-pear --with-gettext --enable-session --with-mcrypt --with-curl --enable-ctype 
make
make install


#####################################



rm -rf /etc/php.ini
ln -s /usr/local/php/etc/php.ini /etc/php.ini
cp php.ini-production /usr/local/php/etc/php.ini
cp /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
ln -s /usr/local/php/etc/php-fpm.conf /etc/php-fpm.conf


#####################################


cp sapi/fpm/init.d.php-fpm /etc/rc.d/init.d/php-fpm
chmod 755 /etc/rc.d/init.d/php-fpm
chkconfig php-fpm on



cd /usr/local/src/
unzip Discuz_X3.2_SC_GBK.zip
rm -rf /usr/local/nginx/html/{index.html,50x.html}*
mv upload/* /usr/local/nginx/html/
chown -Rf www:www /usr/local/nginx/html
chmod -Rf 755 /usr/local/nginx/html




