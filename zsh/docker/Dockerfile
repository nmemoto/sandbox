FROM centos:latest

ENV ZSH_VERSION 5.5.1
ENV GIT_VERSION 2.17.1

RUN yum update -y && \
    yum install -y ncurses-devel gcc make

# Git install
WORKDIR /tmp
RUN yum install -y curl-devel expat-devel gettext-devel openssl-devel perl-devel zlib-devel autoconf && \
    curl -L https://github.com/git/git/archive/v${GIT_VERSION}.tar.gz -o git-${GIT_VERSION}.tar.gz && \
    tar zvxf git-${GIT_VERSION}.tar.gz 
WORKDIR /tmp/git-${GIT_VERSION}
RUN make configure && \
    ./configure --prefix=/usr && \
    make all && \
    make install && \
    rm -rf /tmp/git*

# zsh install
WORKDIR /usr/local/src
RUN curl -L http://sourceforge.net/projects/zsh/files/zsh/${ZSH_VERSION}/zsh-${ZSH_VERSION}.tar.gz/download -o zsh-${ZSH_VERSION}.tar.gz && \
    tar zvxf zsh-${ZSH_VERSION}.tar.gz
WORKDIR zsh-${ZSH_VERSION}
RUN ./configure --with-tcsetpgrp && make && make install

# prezto
RUN git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"
COPY add_files/files/.z* /root/

# zsh setting
RUN echo "/usr/local/bin/zsh" >> /etc/shells && \
    chsh -s /usr/local/bin/zsh

WORKDIR /

CMD ["/sbin/init"]
