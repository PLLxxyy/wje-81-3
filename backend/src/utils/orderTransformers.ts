export function transformOrderItem(item: any) {
  return {
    ...item,
    seat_no: `${item.row}${item.seat_number}`,
    seatNo: `${item.row}${item.seat_number}`,
    attendee_name: item.ticket_holder_name,
    attendeeName: item.ticket_holder_name,
    attendee_id_no: item.ticket_holder_id_card,
    attendeeIdNo: item.ticket_holder_id_card,
    qr_code: item.qr_code,
    qrCode: item.qr_code
  };
}

export function transformOrderItems(items: any[]) {
  return items.map(transformOrderItem);
}

export function transformOrderDetail(order: any, items: any[]) {
  return {
    ...order,
    buyer_name: order.buyer_name,
    buyerName: order.buyer_name,
    buyer_phone: order.buyer_phone || '',
    buyerPhone: order.buyer_phone || '',
    buyer_email: order.buyer_email || '',
    buyerEmail: order.buyer_email || '',
    concert_title: order.title,
    concert_artist: order.artist,
    concert_date: order.date,
    concert_time: order.time,
    items
  };
}
