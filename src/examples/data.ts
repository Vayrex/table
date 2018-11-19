let data: any[] = [];

for(let i = 1; i <= 100; i++) {
    data.push({
        id: i,
        name: `Name_${i}`,
        email: `email${i}@emai.com`,
        description: 'Test description goes here. Test description goes here. Test description goes here. Test description goes here. '
    });
}

export const DATA = data;