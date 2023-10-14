import { Handbag, SketchLogo, HighHeel, ListBullets } from '@phosphor-icons/react'
import { CategorieContainer, CategorieFlex, CategorieItems } from './styles'
import { useContext } from 'react'
import { lojinhaContext } from '../../../context/LojinhaContext'


function Categorie() {
    const { getCategorie } = useContext(lojinhaContext)

    function handleGetCategories(item: string) {
        getCategorie(item)
    }

    return (
        <CategorieContainer>

            <CategorieFlex>
                <CategorieItems onClick={() => handleGetCategories("bolsas")}>
                    <Handbag size={42} />
                    <p>Bolsas</p>
                </CategorieItems>
                <CategorieItems onClick={() => handleGetCategories("joias")}>
                    <SketchLogo size={42} />
                    <p>Joias</p>
                </CategorieItems>
                <CategorieItems onClick={() => handleGetCategories("sapatos")}>
                    <HighHeel size={42} />
                    <p>Sapatos</p>
                </CategorieItems>
                <CategorieItems onClick={() => handleGetCategories("all")}>
                    <ListBullets size={42} />
                    <p>Todos</p>
                </CategorieItems>
            </CategorieFlex>

        </CategorieContainer>
    )
}

export default Categorie