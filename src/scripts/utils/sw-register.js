import { Workbox } from 'workbox-window';

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('./sw.js');

    wb.addEventListener('waiting', () => {
      console.log('service worker installed...');
    });

    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        console.log('service worker active..');
      }
    });

    wb.register();
  }
};

export default swRegister;
