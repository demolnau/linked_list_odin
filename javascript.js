function LinkedList(){
    let full_list=[];
    //adds new node to the end of the list
    function append(value){
        if(full_list.length==0){
            let new_node = Node(value)
            full_list.push(new_node)
            return full_list;
        }
        else{
            let new_node = Node(value)
            full_list[full_list.length-1].nextNode=new_node;
            full_list.push(new_node)
            return full_list;
        }

    }
    //adds a new node to the beginning of the linked list
    const prepend = function(value){
        let new_node = Node(value);
        new_node.nextNode = full_list[0];
        full_list.unshift(new_node);
        return full_list;
    }
    //returns the size of the current list
    const get_size = function(){
        return full_list.length;
    }
    //returns the head node
    const get_head =  function(){
        let head = full_list[0];
        return head;
    }
    //returns the last node in the list
    const get_tail = function(){
        let tail = full_list[(full_list.length -1)];
        return tail;
    }
    //returns the node that is at a specific index
    const get_node_at_index = function(num){
        return(full_list[num]);
    }
    //removes the last node
    function pop_node(){
        if(full_list.length==0){
            console.log("The list is empty! Nothing to return here!")
        }
        else if(full_list.length==1){
            return full_list.pop();

        }
        else{
            full_list[(full_list.length-2)].nextNode = null;
            return full_list.pop();
        }
        
    }
    //returns true/false if a there is a node with a specifc value present
    const contains_node = function(string){
        let contains=false;
        for(let i=0; i<full_list.length; i++){
            if(full_list[i].value==string){
                contains=true;
            }
        }
        return contains
    }
    //returns the index of the node containing a particular
    const find_node = function(string){
        for(let i=0;i<full_list.length;i++){
            if(full_list[i].value == string){
                return(i)
            }
        }
    }
    const toString = function(){
        var results = ""
        for(let i =0; i<full_list.length;i++){
            results = results +  `( ${full_list[i].value} ) -> ` 
        }
        results = results + " null "
        return results;
    }

    const insertAt = function(value, index){
        if(index > 0){
            console.log("inserting at index greater than 0")
            if(index >= full_list.length){ 
                console.log("index is at the end of the list")
                //full_list.append(value);
                let new_node = Node(value)
                full_list[full_list.length-1].nextNode=new_node;
                full_list.push(new_node)
            } else {
                console.log("inserting at index greater than 0, but not equal to full_list.length")
                const new_node = Node(value);
                full_list[index-1].nextNode=new_node;
                new_node.nextNode=full_list[index+1];
                full_list.splice(index,0,new_node);
            }
        }
        else{
            console.log("index is equal to 0" + index);
            //full_list.prepend(value);
            let new_node = Node(value);
            new_node.nextNode = full_list[0];
            full_list.unshift(new_node);
        }
        return full_list;
    }

     function removeAt(num){
        if(num==full_list.length-1){
            full_list[num-1].nextNode=null;
        }
        else{
            full_list[num-1].nextNode=full_list[num+1];
        }
        full_list.splice(num,1);
        return full_list;
     }

    return{
        full_list, 
        append,
        prepend,
        get_size,
        get_head,
        get_tail,
        get_node_at_index,
        pop_node,
        contains_node,
        find_node,
        toString,
        insertAt,
        removeAt
    };
};

const Node= function(input){
    let value = input || null;
    let nextNode = null;
    return{value, nextNode}
}

//TESTING
const house_animals = LinkedList()
console.log(house_animals.append("cat")); //cat
console.log(house_animals.prepend("dog")); //dog --> cat
console.log(house_animals.prepend("horse")); //horse -->dog --> cat
//console.log(house_animals.get_head()) //returns horse
//console.log(house_animals.get_size()) //3
//console.log(house_animals.get_tail()) //cat
//console.log(house_animals.get_node_at_index(1))//dog
//house_animals.pop()//cat
//console.log(house_animals.full_list) // horse -->dog

//console.log(house_animals.contains_node("chimpanzee"))
//console.log(house_animals.contains_node("dog"))

//house_animals.append("cat")
house_animals.append("rat")
//house_animals.append("mouse")
//console.log(house_animals.full_list)
//console.log(house_animals.pop());
//console.log(house_animals.full_list)

//console.log(house_animals.find_node("rat"))

console.log(house_animals.insertAt("sheep",1))
console.log(house_animals.insertAt("hamster",5))
console.log(house_animals.insertAt("cow",0))
//console.log(house_animals.removeAt(3))
console.log(house_animals.toString());
