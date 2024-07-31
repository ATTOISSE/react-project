export function ProductRow({product}) {
    const style = product.stock ? undefined : {color:'red'}
    return <tr key="">
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}