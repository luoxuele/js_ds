import DLinkedList from "../src/DLinkedList";

const dlink = new DLinkedList();

dlink.insert("呵呵",0);
dlink.insert("哈哈",0);
dlink.insert("哟哟",-1);
dlink.insert("卧槽",1);
// dlink.insert("哦哦",0);

// console.log(dlink);
// console.log(dlink.tail);
dlink.travel();
console.log("----------");
dlink.retravel();

console.log(dlink instanceof Object);
console.log(dlink instanceof DLinkedList);

