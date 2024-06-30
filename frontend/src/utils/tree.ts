export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

export const seed: TreeNode = {
  id: "1",
  name: "1",
  children: [
    {
      id: "2",
      name: "1",
      children: [
        {
          id: "4",
          name: "2",
        },
        {
          id: "6",
          name: "4",
          children: [
            {
              id: "10",
              name: "1",
            },
            { id: "20", name: "20" },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "1",
      children: [
        {
          id: "5",
          name: "9",
        },
        {
          id: "10",
          name: "10",
        },
      ],
    },
  ],
};
