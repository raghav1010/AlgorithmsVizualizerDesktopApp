import eel
eel.init('web')
st=[]
li=[]

@eel.expose
def push_stack(data):
    st.append(data)

    return st," "

@eel.expose
def pop_ele():
    if(len(st)==0):
        return " no value  ","ytpme"

    val=st.pop()
    if(len(st)==0):
        return val,"ytpme"

    return val,st;

@eel.expose
def insert_end(data):
    li.append(data)
    print(li)
    return li," "

@eel.expose
def insert_beg(data):
    if len(li)==0:
        li.append(data)
    else:
        li.insert(0,data)
    print(li)
    return li," "

@eel.expose
def del_beg():
    if(len(li)==0):
        return " no value  ","ytpme"

    val=li.pop(0)
    if(len(li)==0):
        return val,"ytpme"
    return val,li;

@eel.expose
def del_end():
    if(len(li)==0):
        return " no value  ","ytpme"
    val=li.pop()
    if(len(li)==0):
        return val,"ytpme"
    return val,li;

eel.start('index.html', size=(600, 600))
