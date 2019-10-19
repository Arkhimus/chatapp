import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

const mes = (mess) => ({
  type: "asd",
  payload: mess,
});

const mapStateToProps = state => ({
  messages: state.chatReducer.messages
});

const mapDispatchToProps = {
  mes
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;

// class MessageBoxContainer extends Component {
//   componentDidMount = () => {
//     this.props.onFetchingInspirations()
//   }

//   render() {
//     let text = ''
//     let inspirationList = <Spinner />;

//     if (!this.props.insloading) {
//       let randomIndex = Math.ceil(Math.random() * 6)

//       Object.keys(this.props.inspirations).filter(insKey => {
//         if (insKey === `MSG00${randomIndex}`) {
//           text = this.props.inspirations[insKey].text
//         }
//       })

//       inspirationList = (<MessageBox text={text} />)
//     }
//     return (inspirationList)
//   }
// }

// const mapStateToProps = state => {
//   return {
//     inspirations: state.resoScaleReducer.inspirations,
//     insloading: state.resoScaleReducer.insloading
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onFetchingInspirations: () => dispatch(actions.fetchInspirations())
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MessageBoxContainer);
