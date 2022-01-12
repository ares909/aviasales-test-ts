const filterTickets = (array: any[], stops: any[]) => {
    return array.filter(
        (item) => stops.includes(item.segments[0].stops.length) && stops.includes(item.segments[1].stops.length),
    );
};

export default filterTickets;
