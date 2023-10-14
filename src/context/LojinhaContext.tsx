import { ReactNode, createContext, useState, useEffect } from "react";
import db from "../Db/db.json"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


//usando em 2 estados
interface LojinhaItemsType {
  id: string;
  imgItem: string;
  textItem: string;
  priceItem: string;
  categorieItem: string;
  quantity: number;
}

//interface para o contexto
interface CarrinhoContextType {
  getItemCarrinho: (item: LojinhaItemsType) => void
  items: LojinhaItemsType[]
  newItemCarrinho: LojinhaItemsType[]
  removeItemCarrinho: (item: LojinhaItemsType) => void
  totalCart: number
  getCategorie: (item: string) => void
  getRemoveItem: (item: LojinhaItemsType) => void
  finishedCarrinho: (item: string) => void
}
export const lojinhaContext = createContext({} as CarrinhoContextType);

//interface para o children
interface LojinhaType {
  children: ReactNode;
}

function LojinhaContext({ children }: LojinhaType) {

  const [items, setItems] = useState<LojinhaItemsType[]>([]);
  const [allItems, setAllItems] = useState<LojinhaItemsType[]>([]);

  const [newItemCarrinho, setNewItemCarrinho] = useState<LojinhaItemsType[]>([])
  const [totalCart, setTotalCart] = useState(0)


  useEffect(() => {
    setAllItems(db);
    setItems(db);
  }, []);

  function getCategorie(item: string) {
    switch (item) {
      case "bolsas":

        const newList = allItems.filter((items) => items.categorieItem === item)
        setItems(newList)
        break;
      case "joias":

        const newLists = allItems.filter((items) => items.categorieItem === item)
        setItems(newLists)
        break;
      case "sapatos":

        const newListss = allItems.filter((items) => items.categorieItem === item)
        console.log(newListss)
        setItems(newListss)
        break;

      case "all":
        setItems(allItems)
        break;

    }

  }

  function removeItemCarrinho(item: LojinhaItemsType) {


    if (item.quantity > 1) {
      //clonar lista para remover item
      const removeItemCar = [...newItemCarrinho]

      const itemExist = removeItemCar.find(itemid => itemid.id === item.id)

      if (itemExist) {
        itemExist.quantity--

        // removeItemCar[itemExist].priceItem = (parseFloat(removeItemCar[itemExist].priceItem) / (removeItemCar[itemExist].quantity + 1) * removeItemCar[itemExist].quantity).toFixed(2);
      }
      setTotalCart(state => state - 1)
      setNewItemCarrinho(removeItemCar)
      const notify = () => toast.success("Item removido no carrinho !");
      notify()

    }

  }

  //pegando informações do componente card
  function getItemCarrinho(item: LojinhaItemsType) {
    //clonar lista para adicionar item
    const itemAddCar = [...newItemCarrinho]

    const itemExist = itemAddCar.find(itemid => itemid.id === item.id)

    if (itemExist) {

      itemExist.quantity++
      // itemAddCar.filter(state => state.quantity = itemExist.quantity + 1)

      // newItemCar[itemExist].quantity += 1;
      // newItemCar[itemExist].priceItem = (parseFloat(newItemCar[itemExist].priceItem) / (newItemCar[itemExist].quantity - 1) * newItemCar[itemExist].quantity).toFixed(2);

      // newItemCar.map(state => parseFloat(state.priceItem) * state.quantity)
      setTotalCart(state => state + 1)
      setNewItemCarrinho(itemAddCar)

    } else {

      const newItem: LojinhaItemsType = {
        id: item.id,
        imgItem: item.imgItem,
        textItem: item.textItem,
        priceItem: item.priceItem.replace(/\./g, '').replace('.', ','),
        categorieItem: item.categorieItem,
        quantity: 1
      }
      setTotalCart(state => state + 1)
      setNewItemCarrinho([...newItemCarrinho, newItem])

    }


    const notify = () => toast.success("Item Adicionado no carrinho !");
    notify()
  }

  function getRemoveItem(item: LojinhaItemsType) {
    const listItem = [...newItemCarrinho]

    const removeItem = listItem.filter(items => items.id !== item.id)
    if (item.quantity > 1) {
      setTotalCart(state => state - item.quantity)
      const notify = () => toast.success("Items removido do carrinho !");
      notify()
    } else {
      setTotalCart(state => state - 1)
      const notify = () => toast.success("Item removido do carrinho !");
      notify()
    }
    setNewItemCarrinho(removeItem)
    console.log(newItemCarrinho)

  }

  function finishedCarrinho(item: string) {
    if (item === "finalizado") {
      setNewItemCarrinho([])
      setTotalCart(0)
    }

  }
  return (
    <lojinhaContext.Provider
    value={{
      getItemCarrinho,
      items,
      newItemCarrinho,
      removeItemCarrinho,
      totalCart,
      getCategorie,
      getRemoveItem,
      finishedCarrinho }}>
      <ToastContainer autoClose={1000} position="top-center" />
      {children}

    </lojinhaContext.Provider>
  )
}

export default LojinhaContext