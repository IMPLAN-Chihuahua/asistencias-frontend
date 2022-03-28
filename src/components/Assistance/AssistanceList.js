export const depts = [
    {
        id: 1,
        name: 'Departamento de Informática',
        hasRepresentative: true,
    },
    {
        id: 2,
        name: 'Departamento de Recursos Humanos',
        hasRepresentative: false,
    },
    {
        id: 3,
        name: 'Departamento de Contabilidad',
        hasRepresentative: false,
    },
];

export const representatives = [
    {
        id: 1,
        deptId: 1,
        deptName: 'Departamento de Informática',
        name: 'Johnny Depp',
        assist: true,
        date: '2020-01-01',
    },
    {
        id: 2,
        deptId: 1,
        deptName: 'Departamento de Informática',
        name: 'Tim Burton',
        assist: false,
        date: '2020-01-01',
    },
    {
        id: 3,
        deptId: 1,
        deptName: 'Departamento de Informática',
        name: 'Salma Hayek',
        assist: false,
        date: '2020-01-01',
    },
    {
        id: 4,
        deptId: 2,
        deptName: 'Departamento de Recursos Humanos',
        name: 'Robert Pattinson',
        assist: true,
        date: '2020-01-01',
    },
    {
        id: 5,
        deptId: 2,
        deptName: 'Departamento de Recursos Humanos',
        name: 'John Lennon',
        assist: false,
        date: '2020-01-01',
    },
    {
        id: 6,
        deptId: 3,
        deptName: 'Departamento de Contabilidad',
        name: 'Dwayne Johnson',
        assist: true,
        date: '2020-01-01',
    },
    {
        id: 8,
        deptId: 3,
        deptName: 'Departamento de Contabilidad',
        name: 'Perro Johnson',
        assist: true,
        date: '2020-01-01',
    },
    {
        id: 9,
        deptId: 3,
        deptName: 'Departamento de Contabilidad',
        name: 'Jose Johnson',
        assist: true,
        date: '2020-01-01',
    },
    {
        id: 10,
        deptId: 3,
        deptName: 'Departamento de Contabilidad',
        name: 'Martin Johnson',
        assist: true,
        date: '2020-01-01',
    },
    {
        id: 7,
        deptId: 3,
        deptName: 'Departamento de Contabilidad',
        name: 'Michael Jackson',
        assist: false,
        date: '2020-01-01',
    },
]

export const getRepresentativesFromDept = (deptId) => {
    return representatives.filter(rep => rep.deptId === deptId);
}

export const getRepresentativeThatIsOnReunion = (deptId) => {
    const [{ name }] = representatives.filter(rep => rep.deptId === deptId && rep.assist === true)
    return name;
}

export const getRepresentativesThatAreOnReunion = () => {
    return representatives.filter(rep => rep.assist === true);
}