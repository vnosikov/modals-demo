/* eslint-disable max-len */
import React from 'react';
import { Button } from 'reactstrap';
import SimpleModal from '../modals/SimpleModal';

const Home = ({ openModal }) => {
  const onClick = () => {
    openModal(SimpleModal);
  };

  return (
    <div>
      <h2>Lorem Ipsum</h2>
      <Button color="primary" onClick={onClick}>Show</Button>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie dui at turpis placerat dapibus. Suspendisse ac metus iaculis ex porta vulputate. Suspendisse pulvinar eget mi a lacinia. Nullam sed cursus risus, id viverra mauris. Quisque vestibulum lorem in libero pellentesque pretium. Ut blandit dolor quam. Suspendisse dictum orci et nisi porta, at tristique massa ullamcorper. </p>
      <p>Maecenas facilisis euismod dolor, commodo aliquam dolor pharetra sodales. Sed finibus dictum lectus id egestas. Cras id tortor pellentesque, gravida mi tempus, commodo leo. Sed non est a lectus semper maximus et ac augue. Nam sit amet scelerisque neque. Nunc condimentum tortor feugiat, placerat dolor eu, pulvinar dui. Sed facilisis consectetur lorem sit amet consequat. </p>
      <p> Vivamus lectus mi, molestie vel mauris egestas, sodales condimentum nulla. Proin eget lectus felis. Praesent id augue nec tortor semper tempus et a velit. Donec condimentum lacinia rutrum. Duis augue felis, consequat quis nunc vitae, rutrum iaculis tellus. Fusce a dolor at dolor hendrerit varius vitae sit amet nisl. Etiam suscipit, nisl in fringilla mollis, quam risus suscipit eros, non accumsan est nibh eu nibh. Mauris in porta risus. Cras ligula ligula, vehicula et nibh sed, interdum congue arcu. Vivamus quis gravida urna, eu dignissim enim. Suspendisse ultrices ornare malesuada. Suspendisse rhoncus, ligula at blandit vehicula, ipsum nunc congue enim, eget malesuada ipsum sem ut lectus. Curabitur augue erat, bibendum vitae varius in, placerat vel urna. Vestibulum feugiat a nibh at auctor. Sed quis lectus ornare, viverra metus id, suscipit justo. </p>
    </div>
  );
};

export default Home;
