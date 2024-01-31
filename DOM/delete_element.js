//========== User's Code Starts Here ==========
'use strict';

process.stdin.setEncoding('utf-8');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var remove3rdlastElem = function(head) {
    let temp = head;
    if (temp.next.next){
        while(temp.next.next.next.next){
            temp = temp.next
        }

        //console.log(temp)
        temp.next = temp.next.next ;
        //console.log(temp)
        //head = temp 

    }
    // Write your code here to remove the 3 rd last element from link list

    
    //Dont change anything below. If changed click on reset.
    printLinkList(head)
};
//Dont change anything below. If changed click on reset.
function printLinkList(head){
    var current = head;
    var linklistString = ''
    while(current.next){
      
        linklistString = linklistString + current.val + '->'
        current = current.next
    }
    linklistString = linklistString + current.val
    console.log(linklistString)
}

//Dont change anything below. If changed click on reset.
function ListNode(val,next) {
  return {
    val: val,
    next: next==undefined?null:next,
  };
}
async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            var linklistvalues = inputArr[0].split('->');
            var head=ListNode(parseInt(linklistvalues[0]));
            var temp =head;
            var count=2;
            for(var i=1;i<linklistvalues.length;i++)
            {
                var new_node = ListNode(parseInt(linklistvalues[i]));
                count=count+1;
                temp.next=new_node;
                temp=new_node;
            }
     var output = remove3rdlastElem(head);
            
            
            process.exit();
            
        })
        

}
readInput();
//========== User's Code Ends Here ==========