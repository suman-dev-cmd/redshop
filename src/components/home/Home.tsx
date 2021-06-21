import { Container } from "@material-ui/core"
import React,{useState,useEffect} from "react"
import { makeStyles,Theme  } from '@material-ui/core/styles';
import Slider from './Slider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useDispatch,useSelector} from 'react-redux';
import {getProduct} from '../../actions/ProductAction'; 
import {RootStore} from "../../Store";
import {ProductStat} from '../../actions/ProductType';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import {CartItemType} from '../../actions/CartType';
import {addItemToCart} from '../../actions/CartAction';
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor:'#A8EB12',
    },
    gridList: {
        width: '100%',
        height: '100%',
        marginTop:'20px !important',
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
      back:{
        backgroundColor:'rgb(230 83 15) !important',  
      }
}));

const Home:React.FC = () => {
    const classes = useStyles();
    const {loading,product} = useSelector((state: RootStore) => state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProduct());
    },[]);
    const handleAddToCart = (clickedItem:CartItemType) => {
        dispatch(addItemToCart(clickedItem));
    };
    return(
        <Container maxWidth="lg" className="caro">
            <Slider />
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3} className="headerRoot">
                    <Paper className={classes.paper}>No Cost EMI</Paper>
                </Grid>
                <Grid item xs={6} sm={3} className="headerRoot">
                    <Paper className={classes.paper}>24 * 7 Help</Paper>
                </Grid>
                <Grid item xs={6} sm={3} className="headerRoot">
                    <Paper className={classes.paper}>7 Days Return Policy</Paper>
                </Grid>
                <Grid item xs={6} sm={3} className="headerRoot">
                    <Paper className={classes.paper}>Exchange Offers</Paper>
                </Grid>
            </Grid>
            <GridList  className={classes.gridList} cols={4}>
                
                {product && product.map((item:ProductStat) => (
                <GridListTile key={item.id} className={classes.back}>
                    <img src={item.image} alt={item.title} />
                    <GridListTileBar
                    title={item.title}
                    subtitle={<span>by: ${item.price}</span>}
                    actionIcon={
                        <Button  onClick={()=>handleAddToCart(item)}>
                            <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                                <AddShoppingCartIcon />
                            </IconButton>
                        </Button>
                    }
                    />
                </GridListTile>
                ))}
            </GridList>
        </Container>
    )
}

export default Home;