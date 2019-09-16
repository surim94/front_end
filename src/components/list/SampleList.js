import React from 'react';
import greyImage from 'public/assets/img/grey-image.png';
import { Item } from 'semantic-ui-react'
import style from 'style/style'

const SampleList = ({list}) => {
    console.log(list)

    /* 같은형태의 component는 .map을 이용해서 반복적으로 그린다 */
    /* .map 사용시 주의사항 가장 parent tag에 unique key가 반드시 들어가야함  */
    return (
        list.map((object ,i) => (
            <Item key={object.busStaId}>
                <Item.Image src={greyImage} style={style.image_list} />
                <Item.Content style={style.item_list}>
                <Item.Header>Content {object.busStaNm}</Item.Header>
                <Item.Meta>
                    <span>Sample</span>
                    <span>Data</span>
                </Item.Meta>
                <Item.Description>
                    {object.busStaId}
                </Item.Description>
                </Item.Content>
            </Item>
        ))
    )

}

export default SampleList;