import React, { ReactNode } from 'react';
import styles from '../styles/BlogLayout.module.css';

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => (
  <div className={styles.blogLayout}>{children}</div>
);

export default BlogLayout;
