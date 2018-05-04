import './Pure.less';
function clearTest () {
  this.props.test = '';
}
export default ({ t, test }) => (
  <div>
    <p>{t('common:pureComponent')}</p>
    <span className="test">111111</span>
    <span>{test}</span>
    <input type="text" defaultValue = {test}/>
    <button onClick={ clearTest.bind(this)}>clear test</button>
  </div>
);

