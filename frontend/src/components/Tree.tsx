import React from "react";
import { TreeNode } from "@/utils/tree";

interface TreeProps {
  node: TreeNode;
}

const Tree: React.FC<TreeProps> = ({ node }) => {
  const hasChildren = node.children && node.children.length > 0;
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex px-4 flex-col items-center">
        <div className="flex items-center justify-center w-12 h-8 bg-neutral-700 border border-gray-400 rounded-full">
          {node.name}
        </div>
      </div>
      {hasChildren && (
        <>
          <div className="flex justify-around w-full">
            {node.children?.map((child) => (
              <div key={child.id} className="flex flex-col items-center">
                <div className="w-1/2 relative h-0.5 top-10 bg-gray-300"></div>
                <div className="w-0.5 h-5 bg-gray-300"></div>
                <Tree node={child} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tree;
