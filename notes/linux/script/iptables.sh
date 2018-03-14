#!/bin/sbin
PATH=/sbin:/bin:/usr/sbin:/usr/bin; export PATH

iptables -F
iptables -X
iptables -Z

iptables -P INPUT ACCEPT
iptables -P OUTPUT ACCEPT
iptables -P FORWARD ACCEPT

iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT
iptables -A INPUT -p icmp -j ACCEPT
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -m state --state NEW -m tcp -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -m state --state NEW -m tcp -p tcp --dport 3306  -j ACCEPT
iptables -A INPUT -m state --state NEW -m tcp -p tcp --dport 8080  -j ACCEPT
iptables -A INPUT -m state --state NEW -m tcp -p tcp --dport 8000  -j ACCEPT
iptables -A INPUT -m state --state NEW -m tcp -p tcp --dport 3000  -j ACCEPT
iptables -A INPUT -j REJECT --reject-with icmp-host-prohibited

iptables -A FORWARD -j REJECT --reject-with icmp-host-prohibited

#service iptables save
iptables-save > /etc/sysconfig/iptables