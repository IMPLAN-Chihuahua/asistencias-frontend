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
        name: 'Juan Perez',
        assist: true,
        date: '2020-01-01',
    },
    {
        id: 2,
        deptId: 1,
        name: 'Pedro Perez',
        assist: false,
        date: '2020-01-01',
    },
    {
        id: 3,
        deptId: 1,
        name: 'Chango León',
        assist: false,
        date: '2020-01-01',
    },
    {
        id: 4,
        deptId: 2,
        name: 'Micro Phone',
        assist: true,
        date: '2020-01-01',
    },
    {
        id: 5,
        deptId: 2,
        name: 'John Lennon',
        assist: false,
        date: '2020-01-01',
    },
    {
        id: 6,
        deptId: 3,
        name: 'Dwayne Johnson',
        assist: true,
        date: '2020-01-01',
    },
    {
        id: 7,
        deptId: 3,
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