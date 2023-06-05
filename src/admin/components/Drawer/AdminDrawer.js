import React from "react";
import { DrawerContainer, DrawerContent, DrawerHead, DrawerIcon, DrawerSubHead } from "./AdminDrawer.styled";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md'
import { colors, size } from "../../const/style";
function AdminDrawer() {
  const [expanded, setExpanded] = React.useState(true)
  const [drawerItems, setDrawerItems] = React.useState([
    {
      "head": "Admin",
      "subhead": [
        {
          "name": "Add Admin",
          "selected":false
        },
        {
          "name": "Admin List",
          "selected":false
        }
      ],
      "collapse": false

    },
    {
      "head": "Sale",
      "subhead": [
        {
          "name": "Laptop",
          "selected":false
        },
        {
          "name": "Desktop",
          "selected":false
        }
      ],
      "collapse": false

    }
  ])

function setCollapse(key,state){
 let iitem=[...drawerItems]
 iitem[key]={
  ...drawerItems[key],
  collapse:state
 }
 setDrawerItems(iitem)
}

function onSelect(key,key1,state){
  let itemss=[...drawerItems[key]?.subhead]
  
  itemss[key1]={
  
      ...drawerItems[key].subhead[key1],
      selected:state
    }
    console.log("itemss",itemss)
    let itemz=[...drawerItems]
    itemz[key]={
     ...drawerItems[key],
     "subhead":itemss
    }
    console.log("itemz",itemz)
    setDrawerItems(itemz)
}

  return (
    <>
      <DrawerContainer expanded={expanded}>
{console.log("drawerItems==>>",drawerItems)}
        <DrawerContent>

          {
            drawerItems?.map((item,key) => {
              return (
                <>
                  <DrawerHead>
                    {item?.collapse ? <MdKeyboardArrowDown fontSize={size.font} onClick={()=>setCollapse(key,false)} color={colors.iconColor} /> : <MdKeyboardArrowRight fontSize={size.font} onClick={()=>setCollapse(key,true)} color={colors.iconColor} />}

                    <label>{item?.head}</label>

                  </DrawerHead>
                  {item?.collapse && item?.subhead?.map((item1,key1) => {
                    return (
                      <DrawerSubHead onClick={()=>onSelect(key,key1,!item1?.selected)} selected={item1.selected}><label>{item1.name}</label></DrawerSubHead>
                    )
                  })}
                </>
              )

            })
          }


        </DrawerContent>


      </DrawerContainer>

    </>

  )
}
export default AdminDrawer


