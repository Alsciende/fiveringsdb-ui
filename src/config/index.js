export default {
  getApiURL(path) {
    if (path && path[0] === '/') {
      throw new Error('Leading slash no allowed');
    }
    return `${process.env.API_URL + path}`;
  },
  getCardImageURL(card) {
    return `${process.env.IMG_URL + card.id}.png`;
  },
};
