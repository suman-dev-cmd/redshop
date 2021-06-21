import React  from 'react';
import { CardHeader, Container,Grid,CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from './slider1.jpg';
import {RootStore} from "../../Store";
import {useDispatch,useSelector} from 'react-redux';
import {CartItemType} from '../../actions/CartType';
import {addItemToCart,removeItemQtyFromCart,removeItemFromCart} from '../../actions/CartAction';
const useStyles = makeStyles({
    root: {
      minWidth: 500,
      marginTop:'100px',
      backgroundColor:'white'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    headtitle:{
        display: 'block',
        textTransform: 'uppercase',
        fontWeight: 500,
        color: '#878787',
        minHeight: '47px',
        borderRadius: '2px 2px 0 0',
        fontSize: 14,

    },
    pos: {
      marginBottom: 12,
    },
    posw:{
        marginLeft:15,
    },
    smalcard:{
      minWidth:400,
      marginTop:'100px',
      position:'fixed'
    },
    buttonAction:{
        float:'right'
    }
  });
const CartList:React.FC = () => {
    const classes = useStyles();
    const {cartitem} = useSelector((state: RootStore) => state.carts);
    console.log(cartitem);
    // const removeCartItemHandler = (id) => {
    //     dispatch(removeItemFromCart(id))
    // }
    const dispatch = useDispatch();

    const increaseQty = (clickedItem:CartItemType) => {
        dispatch(addItemToCart(clickedItem))
    }
    
    const decreaseQty = (clickedItems:CartItemType) => {
        dispatch(removeItemQtyFromCart(clickedItems))

    }
    const removeCart = (clickedItemss:CartItemType) => {
        dispatch(removeItemFromCart(clickedItemss))

    }
    const bull = <span className={classes.bullet}>•</span>;
    return(
        <>
        <Container maxWidth="lg" >
            <Grid container spacing={6}>
                <Grid item xs={6} sm={8} >
                <Card className={classes.root}>
                    <CardHeader
                        title="My Cart"
                        classes={{
                            title: classes.headtitle, 
                          }}
                    >
                        
                    </CardHeader>
                    <CardContent>
                        
                            {cartitem ? cartitem.map((item:CartItemType) => (
                                <Grid container spacing={6} key={item.id}>
                                    <Grid item xs={6} sm={4}>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={item.image}
                                            title="Contemplative Reptile"
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={8}>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                           {item.description}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            ${item.price}
                                        </Typography>
                                        
                                    </Grid>
                                    <Button size="small" className='plus' onClick={()=>decreaseQty(item)}>-</Button>
                                    <Typography className={classes.posw} color="textSecondary">
                                        {item.amount}
                                    </Typography>
                                    <Button size="small" className='plus' onClick={()=>increaseQty(item)}>+</Button>
                                    <Button size="small" className='removeButton' onClick={()=>removeCart(item)}>REMOVE</Button>
                                    <br />
                                    <br />
                                </Grid> 
                            ))
                            :
                            <Typography className={classes.pos} color="textSecondary">
                                No Item in Cart
                            </Typography>
                        }
                            
                        
                    </CardContent>
                    {
                        cartitem.length > 0 && 
                        <CardActions className={classes.buttonAction}>
                            <Button size="small" className='buttonClass'>Place Order</Button>
                        </CardActions>
                    }
                    
                </Card>
                </Grid>
                <Grid item xs={6} sm={4} >
                    <Card className={classes.smalcard}>
                        <CardHeader
                            title="PRICE DETAILS"
                            classes={{
                                title: classes.headtitle, 
                              }}
                        >
                            
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2" component="p">
                                SubTotal: {cartitem && cartitem.reduce((acc:any, item:CartItemType) => (acc + Number(item.amount)), 0)} (Units)
                            </Typography>
                            <Typography variant="body2" component="p">
                                Est. total: ${cartitem.reduce((acc, item) => acc + item.amount * item.price, 0).toFixed(2)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        </>
    );
}

export default CartList;