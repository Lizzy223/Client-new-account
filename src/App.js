import './App.css'
import Navbar from './components/Navbar/Navbar';
import Details from './components/Pages/Details/Details';
import Homepage from './components/Pages/Homepage';
import  './components/Pages/Homepage.css';
import Order from './components/Pages/Order/Order';
import Chart from './components/Pages/Order/Chart';
import Gannt from './components/Pages/Order/Gannt';
import Password from './components/Pages/Password/Password';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom'
import Address from './components/Pages/Address-book/Address';
import AddressBookForm from './components/Pages/Address-book/AddressBookForm';
import Quote from './components/Pages/Quotes/Quote';
import Invoice from './components/Pages/Invoice/Invoice'
import Funds from './components/Pages/Funds/Funds'
import Ticket from './components/Pages/Ticket/Ticket.js'
import PendingReview from './components/Pages/Pending-review/Pending-review.js'
import Coupon from './components/Pages/Coupon/Coupon.js'
import Messages from './components/Pages/Messages/Messages';
import Inbox from './components/Pages/Messages/Inbox';
import Support from './components/Pages/Support/Support';
import SupportMainPage from './components/Pages/Support/SupportMainPage';
import SupportTicket from './components/Pages/Support/SupportTicket';
import SupportNextPage from './components/Pages/Support/SupportNextPage';
import Biling from './components/Pages/Billing/Biling';
import Card from './components/Pages/Card/Card.js';
import Payment from './components/Pages/Card/Payment.js';
import SavedItem from './components/Pages/SavedItem/SavedItem.js' 
import Cart from './components/Pages/SavedItem/Cart.js'
import Requestform from './components/Pages/Quotes/Requestform' 

const App = () => {

  return (
    <div className="">
      <h1>TenPlus</h1>
      
      <Sidebar />
      <div className='main-content'>
        <Navbar />
        
      
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/details' element={<Details/>}/>
        <Route exact path='/order' element={<Order/>}/>
        <Route exact path='/messages' element={<Messages/>}/>
        <Route exact path='/messages/inbox' element={<Inbox/>}/>
        <Route exact path='/ticket' element={<Ticket/>}/>
        <Route exact path='/quotes' element={<Quote/>}/>
        <Route exact path='/pending-reviews' element={<PendingReview/>}/>
        <Route exact path='/address-book' element={<Address/>}/>
        <Route exact path='/change-password' element={<Password/>}/>
        <Route exact path='/logout' element={<Order/>}/>
        <Route exact path='/invoice' element={<Invoice/>}/>
        <Route exact path='/add-funds' element={<Funds/>}/>
        <Route exact path='/coupon' element={<Coupon/>}/>
        <Route exact path='/support' element={<SupportMainPage/>}/>
        <Route exact path='/support/support-ticket' element={<SupportNextPage/>} />
        <Route exact path='/support/support-ticket/submit-ticket' element={<SupportTicket/>} />
        <Route exact path='/support/support-ticket/support-ticket-message' element={<Support/>} />
        <Route exact path='/address-book/address-form' element={<AddressBookForm/>}/>
        <Route exact path='/order/chart/gannt' element={<Gannt/>}/>
        <Route exact path='order/chart' element={<Chart/>} />
        <Route exact path='/billings' element={<Biling/>} />
        <Route exact path='/card' element={<Card/>} />
        <Route exact path='/card/card-form' element={<Payment/>} />
        <Route exact path='/saved-items' element={<SavedItem/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/request-form' element={<Requestform/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
